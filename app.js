require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const db = require('./models');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

// Import routes
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sync database models and create default user
db.sequelize.sync({ alter: true }).then(async () => {
  console.log('Database synced');
  try {
    const existingUser = await db.User.findOne({ where: { email: 'admin@gmail.com' } });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash('12345678', 10);
      await db.User.create({
        username: 'admin',
        email: 'admin@gmail.com',
        password: hashedPassword
      });
      console.log('Default user created');
    } else {
      console.log('Default user already exists');
    }
  } catch (err) {
    console.error('Error creating default user:', err);
  }
}).catch((err) => {
  console.error('Error syncing database:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
}); 